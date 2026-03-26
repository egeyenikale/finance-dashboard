export const project = {
  slug: "finance-dashboard",
  title: "Finance Dashboard",
  description: "Income, expense, and finance chart dashboard.",
  features: [
  "Summary cards",
  "Cashflow chart",
  "Category charts",
  "Date filters",
  "Export",
  "Responsive layout"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
