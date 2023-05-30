export const Shutdown = (/** @type {import("@minecraft/server-editor").IPlayerUISession} */ uiSession) => uiSession.log.debug( `Shutting down ${uiSession.extensionContext.extensionName} extension` );