import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Vercel Analytics: SPA pageview tracking
// This calls the Insights tracker on initial load and on client-side route changes.
(function () {
	const w = window as any;
	function track(url: string) {
		if (w.__VERCEL_INSIGHTS__ && typeof w.__VERCEL_INSIGHTS__.track === "function") {
			try {
				w.__VERCEL_INSIGHTS__.track(url);
			} catch (e) {
				// ignore errors
			}
		}
	}

	// initial pageview
	track(location.pathname + location.search);

	// patch history methods to detect SPA navigations
	const _push = history.pushState;
	history.pushState = function (...args: any[]) {
		const res = _push.apply(this, args as any);
		track(location.pathname + location.search);
		return res;
	};

	const _replace = history.replaceState;
	history.replaceState = function (...args: any[]) {
		const res = _replace.apply(this, args as any);
		track(location.pathname + location.search);
		return res;
	};

	window.addEventListener("popstate", () => track(location.pathname + location.search));
})();
