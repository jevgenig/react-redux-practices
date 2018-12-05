import { render } from "react-dom";
import { initApplication } from "app/initApplication";

initApplication({})
    .then((app) => {
        render(
            app,
            document.querySelector("#react-placeholder"),
        );
    });
