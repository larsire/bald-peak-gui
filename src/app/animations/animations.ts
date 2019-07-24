import { trigger, state, style, transition, animate, keyframes, group, query, animateChild } from "@angular/animations";

export const slideInAnimation =
   trigger("routeAnimations", [
        transition("* <=> *", [
             query(":enter, :leave",
                  style({ "position": "fixed",  "width": "calc(100% - 60px)", "z-index": 1, "height": "100vh" }),
                  { optional: true }),
             group([
                  query(":enter", [
                      style({ "transform": "translateY(100%)" }),
                      animate("0.5s ease-in-out",
                      style({ "transform": "translateY(0%)" }))
                  ], { optional: true }),
                  query(":leave", [
                      style({ "transform": "translateY(0%)" }),
                      animate("0.5s ease-in-out",
                      style({ "transform": "translateY(-100%)" }))
                      ], { optional: true }),
              ])
        ])
]);

export const fadeInAnimation =
   trigger("routeAnimations", [
        transition("* <=> *", [
             query(":enter, :leave",
                    style(
                       { "position": "fixed",  "width": "100%", "z-index": 1 }
                    ),
                  { optional: true }),
             group([
                  query(":enter", [
                      style({ "opacity": "0" }),
                      animate("0.5s ease-in-out",
                      style({ "opacity": "1" }))
                  ], { optional: true }),
                  query(":leave", [
                      style({ "opacity": "1" }),
                      animate("0.5s ease-in-out",
                      style({ "opacity": "0" }))
                      ], { optional: true }),
              ])
        ])
]);
