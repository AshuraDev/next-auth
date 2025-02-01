/**
 *
 * These routes do not require authentication
 *
 */
export const publicRoutes = ["/", "/auth/new-verification"];
/**
 *
 * Routes that are used for authentication
 *
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];
/**
 *
 *
 *
 */
export const apiAuthPrefix = "/api/auth";
/**
 *
 *
 *
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
