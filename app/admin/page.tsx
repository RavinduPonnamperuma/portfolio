"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOut, Save } from "lucide-react";
import type { PortfolioData } from "@/lib/portfolio-types";

type Tab = "profile" | "about" | "experience" | "json";

const inputClass =
  "w-full rounded-lg border border-gold/20 bg-navy px-3 py-2 text-sm text-text-light outline-none focus:border-gold";
const labelClass = "mb-1 block text-xs font-medium uppercase tracking-wide text-text-muted";

export default function AdminPage() {
  const router = useRouter();
  const [data, setData] = useState<PortfolioData | null>(null);
  const [jsonText, setJsonText] = useState("");
  const [tab, setTab] = useState<Tab>("profile");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/admin/data")
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((portfolio: PortfolioData) => {
        setData(portfolio);
        setJsonText(JSON.stringify(portfolio, null, 2));
      })
      .catch(() => router.replace("/"));
  }, [router]);

  const save = async (payload: PortfolioData) => {
    setSaving(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/admin/data", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(body.error ?? "Save failed");
        return;
      }

      setData(payload);
      setJsonText(JSON.stringify(payload, null, 2));
      setMessage("Saved. Refresh the home page to see updates.");
    } catch {
      setError("Could not save. Check your connection and try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleSave = () => {
    if (!data) return;

    if (tab === "json") {
      try {
        const parsed = JSON.parse(jsonText) as PortfolioData;
        void save(parsed);
      } catch {
        setError("Invalid JSON. Fix syntax errors before saving.");
      }
      return;
    }

    void save(data);
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.assign("/");
  };

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-navy text-text-muted">
        Loading admin…
      </div>
    );
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: "profile", label: "Profile" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "json", label: "All data (JSON)" },
  ];

  return (
    <div className="min-h-screen bg-navy text-text-light">
      <header className="border-b border-gold/20 bg-navy-light">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <div>
            <h1 className="text-xl font-bold text-gold">Portfolio admin</h1>
            <p className="text-sm text-text-muted">Manage site content</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/"
              className="rounded-lg border border-gold/30 px-4 py-2 text-sm hover:bg-gold/10"
            >
              View site
            </Link>
            <button
              type="button"
              onClick={() => void logout()}
              className="inline-flex items-center gap-2 rounded-lg border border-gold/30 px-4 py-2 text-sm hover:bg-gold/10"
            >
              <LogOut size={16} />
              Log out
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2 text-sm font-medium text-navy disabled:opacity-60"
            >
              <Save size={16} />
              {saving ? "Saving…" : "Save changes"}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-6">
        <nav className="mb-6 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-lg px-4 py-2 text-sm transition-colors ${
                tab === t.id
                  ? "bg-gold text-navy font-medium"
                  : "border border-gold/20 text-text-muted hover:text-gold"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {message ? <p className="mb-4 text-sm text-green-400">{message}</p> : null}
        {error ? (
          <p className="mb-4 text-sm text-red-400" role="alert">
            {error}
          </p>
        ) : null}

        {tab === "profile" && (
          <section className="grid gap-4 sm:grid-cols-2">
            {(
              [
                ["fullName", "Full name"],
                ["displayName", "Display name"],
                ["firstName", "First name"],
                ["lastName", "Last name"],
                ["jobTitle", "Job title"],
                ["email", "Email"],
                ["phone", "Phone"],
                ["phoneHref", "Phone link (tel:…)"],
                ["logoInitials", "Logo initials"],
                ["profileImage", "Profile image path"],
              ] as const
            ).map(([key, label]) => (
              <div key={key}>
                <label className={labelClass}>{label}</label>
                <input
                  className={inputClass}
                  value={data.personal[key]}
                  onChange={(e) =>
                    setData({
                      ...data,
                      personal: { ...data.personal, [key]: e.target.value },
                    })
                  }
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label className={labelClass}>LinkedIn URL</label>
              <input
                className={inputClass}
                value={data.personal.social.linkedin.url}
                onChange={(e) =>
                  setData({
                    ...data,
                    personal: {
                      ...data.personal,
                      social: {
                        ...data.personal.social,
                        linkedin: {
                          ...data.personal.social.linkedin,
                          url: e.target.value,
                        },
                      },
                    },
                  })
                }
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>GitHub URL</label>
              <input
                className={inputClass}
                value={data.personal.social.github.url}
                onChange={(e) =>
                  setData({
                    ...data,
                    personal: {
                      ...data.personal,
                      social: {
                        ...data.personal.social,
                        github: {
                          ...data.personal.social.github,
                          url: e.target.value,
                        },
                      },
                    },
                  })
                }
              />
            </div>
          </section>
        )}

        {tab === "about" && (
          <section className="space-y-4">
            <div>
              <label className={labelClass}>Professional summary</label>
              <textarea
                className={`${inputClass} min-h-[140px]`}
                value={data.summary}
                onChange={(e) => setData({ ...data, summary: e.target.value })}
              />
            </div>
            {data.stats.map((stat, index) => (
              <div key={index} className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Stat {index + 1} value</label>
                  <input
                    className={inputClass}
                    value={stat.value}
                    onChange={(e) => {
                      const stats = [...data.stats];
                      stats[index] = { ...stat, value: e.target.value };
                      setData({ ...data, stats });
                    }}
                  />
                </div>
                <div>
                  <label className={labelClass}>Stat {index + 1} label</label>
                  <input
                    className={inputClass}
                    value={stat.label}
                    onChange={(e) => {
                      const stats = [...data.stats];
                      stats[index] = { ...stat, label: e.target.value };
                      setData({ ...data, stats });
                    }}
                  />
                </div>
              </div>
            ))}
          </section>
        )}

        {tab === "experience" && (
          <section className="space-y-8">
            {data.experience.map((job, index) => (
              <div
                key={index}
                className="rounded-xl border border-gold/15 bg-navy-light p-4 space-y-3"
              >
                <h3 className="font-medium text-gold">Role {index + 1}</h3>
                {(
                  [
                    ["period", "Period"],
                    ["role", "Role"],
                    ["company", "Company"],
                  ] as const
                ).map(([key, label]) => (
                  <div key={key}>
                    <label className={labelClass}>{label}</label>
                    <input
                      className={inputClass}
                      value={job[key]}
                      onChange={(e) => {
                        const experience = [...data.experience];
                        experience[index] = { ...job, [key]: e.target.value };
                        setData({ ...data, experience });
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label className={labelClass}>Description</label>
                  <textarea
                    className={`${inputClass} min-h-[80px]`}
                    value={job.description}
                    onChange={(e) => {
                      const experience = [...data.experience];
                      experience[index] = { ...job, description: e.target.value };
                      setData({ ...data, experience });
                    }}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    Responsibilities (one per line)
                  </label>
                  <textarea
                    className={`${inputClass} min-h-[120px]`}
                    value={job.responsibilities.join("\n")}
                    onChange={(e) => {
                      const experience = [...data.experience];
                      experience[index] = {
                        ...job,
                        responsibilities: e.target.value
                          .split("\n")
                          .map((line) => line.trim())
                          .filter(Boolean),
                      };
                      setData({ ...data, experience });
                    }}
                  />
                </div>
              </div>
            ))}
          </section>
        )}

        {tab === "json" && (
          <section>
            <p className="mb-3 text-sm text-text-muted">
              Edit skills, projects, education, and certificates here. Invalid JSON
              will not save.
            </p>
            <textarea
              className={`${inputClass} min-h-[480px] font-mono text-xs`}
              value={jsonText}
              onChange={(e) => setJsonText(e.target.value)}
              spellCheck={false}
            />
          </section>
        )}
      </div>
    </div>
  );
}
