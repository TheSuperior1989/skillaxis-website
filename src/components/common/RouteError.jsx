import { useEffect } from 'react';
import { Link, useLocation, useRouteError } from 'react-router-dom';
import './RouteError.css';

// After a new deploy, a tab that was already open asks for the old build's data and code files.
// Those names no longer exist, so the server answers with the HTML page and the page breaks.
// For that case we reload the page once to pick up the new build; anything else gets a plain message.
const STALE_BUILD = /Unexpected token '<'|is not valid JSON|Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed|ChunkLoadError|Loading chunk/i;
const RELOAD_KEY = 'sx-stale-reload';
const RELOAD_GUARD_MS = 30000;

const reloadedRecently = (path) => {
  try {
    const last = JSON.parse(sessionStorage.getItem(RELOAD_KEY) || 'null');
    return Boolean(last && last.path === path && Date.now() - last.at < RELOAD_GUARD_MS);
  } catch {
    return false;
  }
};

const markReload = (path) => {
  try {
    sessionStorage.setItem(RELOAD_KEY, JSON.stringify({ path, at: Date.now() }));
  } catch {
    // Storage blocked: the reload still happens, the guard just cannot be set.
  }
};

const RouteError = () => {
  const error = useRouteError();
  const location = useLocation();
  const path = `${location.pathname}${location.search}${location.hash}`;
  const message = String(error?.message || error?.statusText || error || '');
  const isStaleBuild = STALE_BUILD.test(message);

  useEffect(() => {
    if (!isStaleBuild || reloadedRecently(path)) return;
    markReload(path);
    window.location.replace(path);
  }, [isStaleBuild, path]);

  return (
    <div className="route-error">
      <div className="route-error-card">
        <h1>{isStaleBuild ? 'Loading the latest version' : 'This page did not load'}</h1>
        <p>
          {isStaleBuild
            ? 'The site was just updated. If this page does not refresh by itself, press the button below.'
            : 'Something went wrong while opening this page. Please try again.'}
        </p>
        <div className="route-error-actions">
          <button type="button" className="btn btn-primary" onClick={() => window.location.replace(path)}>
            Reload the page
          </button>
          <Link to="/" reloadDocument className="btn btn-ghost">Go to the home page</Link>
        </div>
      </div>
    </div>
  );
};

export default RouteError;
