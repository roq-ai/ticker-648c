const mapping: Record<string, string> = {
  invitations: 'invitation',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
