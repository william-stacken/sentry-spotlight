/**
 * Normalizes SDK name to a platform. Can be as specific or unspecific as we support different platforms and SDKs.
 */
export declare function sdkToPlatform(name: string): "javascript.astro" | "javascript" | "java" | "python" | "php.laravel" | "php.symfony" | "php" | "ruby" | "dotnet" | "unknown";
