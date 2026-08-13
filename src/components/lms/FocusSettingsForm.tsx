"use client";

import { useEffect, useState } from "react";
import { Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type Settings = {
  heartbeatTimeoutSeconds: number;
  hiddenRedSeconds: number;
  pausedYellowSeconds: number;
  idleYellowSeconds: number;
  fullscreenYellowSeconds: number;
  repeatedSwitchCount: number;
  nudgeCooldownSeconds: number;
};

const DEFAULT_SETTINGS: Settings = {
  heartbeatTimeoutSeconds: 45,
  hiddenRedSeconds: 30,
  pausedYellowSeconds: 30,
  idleYellowSeconds: 60,
  fullscreenYellowSeconds: 15,
  repeatedSwitchCount: 3,
  nudgeCooldownSeconds: 60,
};

const FIELDS: { key: keyof Settings; label: string; hint: string; min?: number; max?: number }[] = [
  { key: "heartbeatTimeoutSeconds", label: "Heartbeat timeout (s)", hint: "Mark a student RED when no signal arrives for this long.", min: 15, max: 600 },
  { key: "hiddenRedSeconds", label: "Hidden window → RED (s)", hint: "Time a hidden tab/minimized window must last to flag off-task.", min: 5, max: 300 },
  { key: "repeatedSwitchCount", label: "Tab switches → RED", hint: "How many tab switches trigger a RED alert.", min: 2, max: 20 },
  { key: "pausedYellowSeconds", label: "Paused → YELLOW (s)", hint: "Video paused this long flags passive watching.", min: 5, max: 300 },
  { key: "idleYellowSeconds", label: "Idle → YELLOW (s)", hint: "No keyboard/mouse input this long flags passivity.", min: 5, max: 300 },
  { key: "fullscreenYellowSeconds", label: "Fullscreen exit → YELLOW (s)", hint: "Leaving fullscreen this long flags distraction.", min: 5, max: 120 },
  { key: "nudgeCooldownSeconds", label: "Nudge cooldown (s)", hint: "Minimum time between nudges to a student.", min: 10, max: 600 },
];

export default function FocusSettingsForm() {
  const { toast } = useToast();
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/lms/admin/settings")
      .then((r) => r.json())
      .then((data) => {
        if (data.settings) setSettings(data.settings);
      })
      .finally(() => setLoading(false));
  }, []);

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch("/api/lms/admin/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      if (!res.ok) {
        toast({ title: data.error || "Could not save settings.", variant: "destructive" });
        return;
      }
      toast({ title: "Focus settings saved." });
    } catch {
      toast({ title: "Could not save settings.", variant: "destructive" });
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div className="text-muted-foreground">Loading settings…</div>;
  }

  return (
    <div className="space-y-4">
      {FIELDS.map((f) => (
        <div
          key={f.key}
          className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6"
        >
          <div className="flex-1">
            <p className="font-medium text-sm">{f.label}</p>
            <p className="text-xs text-muted-foreground">{f.hint}</p>
          </div>
          <input
            type="number"
            min={f.min}
            max={f.max}
            value={settings[f.key]}
            onChange={(e) =>
              setSettings((prev) => ({ ...prev, [f.key]: Number(e.target.value) }))
            }
            className="w-full sm:w-28 rounded-lg border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
      ))}
      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={saving}
          className="bg-cp-green hover:bg-cp-green-light text-white font-semibold"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
          Save settings
        </Button>
      </div>
    </div>
  );
}
