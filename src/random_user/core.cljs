(ns ^:figwheel-hooks random-user.core
  (:require [goog.dom :as gdom]))

(defn fetch-random-user []
  (let [response (js/fetch "https://randomuser.me/api/"
                           (clj->js {:method "GET"
                                     :headers #js {"Content-Type" "application/json"}}))]
    (-> response
        (.then (fn [res] (.json res)))  ;; Antwort als JSON umwandeln
        (.then (fn [data]               ;; Mit den JSON-Daten weiterarbeiten
                 (let [user (aget data "results" 0)
                       name (str (aget user "name" "first") " " (aget user "name" "last"))
                       email (aget user "email")
                       picture (aget user "picture" "large")]
                   ;; Benutzerinformationen in HTML anzeigen
                   (set! (.-innerHTML (gdom/getElement "user-container"))
                         (str "<strong>Name:</strong> " name "<br/>"
                              "<strong>Email:</strong> " email "<br/>"
                              "<img src='" picture "' alt='User Picture' width='150'/>"))))))))

(defn init []
  (let [load-button (gdom/getElement "load-user")]
    (.addEventListener load-button "click" (fn [_] (fetch-random-user)))))

(init)
