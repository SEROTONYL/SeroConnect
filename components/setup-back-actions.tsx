import Link from "next/link";

type SetupBackActionsProps = {
  compact?: boolean;
};

export function SetupBackActions({ compact = false }: SetupBackActionsProps) {
  return (
    <div className={compact ? "setup-back-actions setup-back-actions-compact" : "setup-back-actions"}>
      <Link className="button button-primary" href="/setup">
        Назад к выбору платформы
      </Link>
      <Link className="button button-secondary" href="/">
        На главную
      </Link>
    </div>
  );
}
