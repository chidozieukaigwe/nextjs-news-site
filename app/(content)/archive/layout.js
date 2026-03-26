/**
 * Parallel routes are supported in layouts. This layout will be shared by both the `@archive` and `@latest` routes, and will render their children in the same layout.
 * You can use this layout to fetch data that is shared between the two routes, or to render a common header or footer.
 * The `archive` and `latest` props will contain the rendered content of the `@archive` and `@latest` routes, respectively.
 * The `children` prop will contain the rendered content of the current route (either `@archive` or `@latest`).
 */
export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
