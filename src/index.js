import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {
  VideoProvider,
  PlayerProvider,
  VideoIdProvider,
  LikeProvider,
  LibraryProvider,
  FilterProvider,
  ThemeProvider,
  PlaylistProvider,
  HistoryProvider,
} from "./contexts/index";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <VideoProvider>
          <PlayerProvider>
            <VideoIdProvider>
              <FilterProvider>
                <LibraryProvider>
                  <LikeProvider>
                    <PlaylistProvider>
                      <HistoryProvider>
                        <App />
                      </HistoryProvider>
                    </PlaylistProvider>
                  </LikeProvider>
                </LibraryProvider>
              </FilterProvider>
            </VideoIdProvider>
          </PlayerProvider>
        </VideoProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
