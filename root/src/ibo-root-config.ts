import { registerApplication, start } from "single-spa";

registerApplication(
  "child1",
  () => System.import("child1"),
  location => location.pathname.startsWith("child1")
);

/* 
  Enables production mode in angular as it can only be set once and be in one mode for the whole system.
  Angular apps no longer need to call enableProdMode() as It would produce an error.
*/
System.import("@angular/core").then(a => {
  a.enableProdMode();
  start({
    urlRerouteOnly: true,
  });
});
