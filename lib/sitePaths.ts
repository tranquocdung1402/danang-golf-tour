export const siteBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";

export function sitePath(path: string) {
  if (!path.startsWith("/")) {
    return `${siteBasePath}/${path}`;
  }

  return `${siteBasePath}${path}`;
}
