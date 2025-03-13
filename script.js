let projectDetailStatus = {"AudioMorph": false, "ExtDict": false}
let projectDetails = {
    "AudioMorph": 
        "<strong>AudioMorph:</strong> This project is a Windows Application that allows the user to " 
        + "convert between two audio formats (or any formats supported by "
        + "<a href='https://www.ffmpeg.org' target='_blank'>FFmpeg</a>). "
        + "The user can also download audio from YouTube videos using the video link with "
        + "a click of a button. This feature is implemented using the python package "
        + "<a href='https://github.com/yt-dlp/yt-dlp' target='_blank'>Yt-Dlp</a>. "
        + "The UI was made using <a href='https://pypi.org/project/PyQt6' target='_blank'>PyQt6</a>. "
        + "The application is packaged using <a href='https://pypi.org/project/pyinstaller' target='_blank'>PyInstaller</a>.", 
    "ExtDict": "<strong>ExtDict:</strong> I'm to lazy to add this right now. 0_0"
}
function onShowPress(name) {
    projectDetailStatus[name] = !projectDetailStatus[name]
    if (projectDetailStatus[name]) {
        document.getElementById(name).innerHTML = projectDetails[name]
        document.getElementById(name + "-button").innerText = "Hide Details"
    } else {
        document.getElementById(name).innerHTML = ""
        document.getElementById(name + "-button").innerText = "Show Details"
    }
}