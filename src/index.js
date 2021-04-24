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
  UserProvider,
} from "./contexts/index";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider>
        <VideoProvider>
          <PlayerProvider>
            <VideoIdProvider>
              <FilterProvider>
                <LibraryProvider>
                  <LikeProvider>
                    <PlaylistProvider>
                      <HistoryProvider>
                        <Router>
                          <App />
                        </Router>
                      </HistoryProvider>
                    </PlaylistProvider>
                  </LikeProvider>
                </LibraryProvider>
              </FilterProvider>
            </VideoIdProvider>
          </PlayerProvider>
        </VideoProvider>
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
