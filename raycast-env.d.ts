/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `view-exif` command */
  export type ViewExif = ExtensionPreferences & {
  /** Fallback Directory - Directory to scan when no files are selected (optional) */
  "fallbackPath"?: string
}
}

declare namespace Arguments {
  /** Arguments passed to the `view-exif` command */
  export type ViewExif = {}
}

