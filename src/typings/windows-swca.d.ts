/// <reference path='./node.d.ts'/>
/// <reference path='./electron.d.ts'/>

declare module 'windows-swca' {
	export enum AccentState {
		ACCENT_DISABLED = 0,
		ACCENT_ENABLE_TRANSPARENTGRADIENT = 2,
		ACCENT_ENABLE_BLURBEHIND = 3,
		ACCENT_ENABLE_FLUENT = 4
	}

	export function SetWindowCompositionAttribute(window: Buffer | Electron.BrowserWindow, accent: AccentState, color: number): void
}