let projectDetailStatus = {"AudioMorph": false, "ExtDict": false, "AMB": false}
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
    "ExtDict": "<strong>ExtDict:</strong> This project is a Python 3.13.1+ package that "
        + "allows the user to create a dictionary with additional features such as "
        + "read-only indices, minimum and maximum amount of key-value pair constraints, and methods to "
        + "easily find values and keys based on certain properties.",
    "AMB": "<strong>Anonymous Message Board:</strong> this project involved coding a backend in python using flask. It also involved signing up for and using a backend hosting service like render."
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