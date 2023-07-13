export function colors() {
    fetch("/docs/color.json", {
        method: "GET",
      })
      .then(response => response.json())
      .then(data => {
        // console.log(JSON.stringify(data))
        let colorConfig = data

        let colorStyle = `
        --main-color:${colorConfig.mainColor};
        --background:${colorConfig.background};
        --primary-purple: ${colorConfig.primaryPurple};
        --primary-yellow:${colorConfig.primaryYellow};
        --primary-green:${colorConfig.primaryGreen};
        --primary-light-green:${colorConfig.primaryLightGreen};
        --dark-shade:${colorConfig.darkShade};
        --shade-three:${colorConfig.shadeThree};
        --shade-two:${colorConfig.shadeTwo};
        --shade-one:${colorConfig.shadeOne};
        --icon-fade:${colorConfig.iconFade};
        --main-color-active:${colorConfig.mainColorActive};
        `
        let layout = `
        --big-border-r:24px;
        --small-border-r:15px;
        `
        document.body.style = colorStyle+layout

        themeColor(colorConfig)
      })
      .catch(error => console.error(error));
}

function themeColor(colorConfig) {
    var meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = `${colorConfig.mainColor}`
    document.getElementsByTagName('head')[0].appendChild(meta)
    // console.log(meta);
}