"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Lock, X } from "lucide-react";

interface AdminLoginModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AdminLoginModal({ open, onClose }: AdminLoginModalProps) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError("Invalid password. Try again.");
        return;
      }

      setPassword("");
      onClose();
      router.push("/admin");
    } catch {
      setError("Could not sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-login-title"
    >
      <div className="w-full max-w-md rounded-xl border border-gold/30 bg-navy-light p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2
            id="admin-login-title"
            className="flex items-center gap-2 text-lg font-semibold text-gold"
          >
            <Lock size={20} aria-hidden />
            Admin sign in
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-text-muted hover:text-gold"
            aria-label="Close admin login"
          >
            <X size={20} />
          </button>
        </div>

        <p className="mb-4 text-sm text-text-muted">
          Enter the admin password to manage portfolio content.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="admin-password" className="mb-1 block text-sm text-text-light">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gold/20 bg-navy px-3 py-2 text-text-light outline-none focus:border-gold"
              placeholder="Enter password"
              required
            />
          </div>

          {error ? (
            <p className="text-sm text-red-400" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gold py-2.5 font-medium text-navy transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
