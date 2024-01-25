// darian was here
lessonBridge = {
  utils: {
      //start utils
      info: {
          "math": {
              apiExport: 86570,
              apiObj: "q",
              tokenObj: "Q",
              navigationExport: 59651,
          },
          "reading-comp": {
              apiExport: 84579,
              apiObj: "webApiUtil",
              tokenObj: "useModuleMapping",
              navigationExport: 79503,
          },
          "vocab": {
              apiExport: 65389,
              apiObj: "webApiUtil",
              tokenObj: "useModuleMapping",
              navigationExport: 78276,
          },
          "reading": {
              apiExport: 84579,
              apiObj: "webApiUtil",
              tokenObj: "useModuleMapping",
              navigationExport: 79503,
          },
      },
      get pack() {
          if (lessonBridge.utils.subject == "vocab") {
              return lessonBridge.utils.context.webpackChunkdigit_vocab.push([
                  [Symbol()], {},
                  n => n
              ]);
          } else if (lessonBridge.utils.subject == "reading-comp") {
              return lessonBridge.utils.context.webpackChunkreading_comp.push([
                  [Symbol()], {},
                  n => n
              ]);
          } else if (lessonBridge.utils.subject == "reading") {
              return lessonBridge.utils.context.webpackChunkfoundational_reading.push([
                  [Symbol()], {},
                  n => n
              ]);
          } else if (lessonBridge.utils.subject == "math") {
              return lessonBridge.utils.context.webpackChunkdigit_math.push([
                  [Symbol()], {},
                  n => n
              ]);
          } else {
              return "Error: Webpack";
          }
      },
      get subject() {
          try {
              return html5Iframe.src.split("/")[4];
          } catch (error) {
              return location.href.split("/")[4];
          }
      },
      get context() {
          try {
              return html5Iframe.contentWindow;
          } catch (error) {
              return window;
          }
      },

      get webApiUtil() {
          try {
              let data = lessonBridge.utils.info[lessonBridge.utils.subject];
              return lessonBridge.utils.pack(data.apiExport)[data.apiObj]
          } catch (uwu) {
              console.log(uwu);
              showToast("Error: " + uwu, "red")
          }
      },

      get api() {
          try {
              let data = lessonBridge.utils.info[lessonBridge.utils.subject];
              return lessonBridge.utils.pack(data.navigationExport).K
          } catch (uwu) {
              console.log(uwu);
              showToast("Error: " + uwu, "red")
          }
      },

      get token() {
          try {
              let data = lessonBridge.utils.info[lessonBridge.utils.subject];
              lessonBridge.utils.pack(data.apiExport)[data.tokenObj](window)
              return window.getToken()
          } catch (uwu) {
              console.log(uwu);
              showToast("Error: " + uwu, "red")
          }
      },
      // end utils
  },
  // start main funcs (main obj)
  setScore: (result) => {
      try {
        // lesson type
          if (html5Iframe.src.includes("TUTORIAL") || html5Iframe.src.includes("PRACTICE")) {
              lessonBridge.utils.webApiUtil.saveLessonResults({
                  score: result
              }, lessonBridge.utils.token);
              return
          }

          // main bypass thing
          // int for enablenext (ac bypass)
          let repeats = true;
          const enID = setInterval(() => {
              if (repeats) {
                  repeats = false;
              } else {
                  if (!lessonBridge.utils.api.navigation.isFinalStep()) {
                      lessonBridge.utils.api.screen.enableNext(true, lessonBridge.utils.token);
                  } else {
                      clearInterval(enID);
                      lessonBridge.utils.webApiUtil.saveLessonResults({
                          score: result
                      }, lessonBridge.utils.token);
                  }
              }
          }, repeats ? 0 : 500);
          // goto for shorter bypass span
          let steps = Object.values(lessonBridge.utils.api.navigation.getAllSteps());
          lessonBridge.utils.api.navigation.goto(steps[steps.length - 2].id, lessonBridge.utils.token)
      } catch (uwu) {
          console.log(uwu);
          showToast("Error: " + uwu, "red")
      }
  },
  close: () => {
      try {
          lessonBridge.utils.webApiUtil.closeLesson();
      } catch (uwu) {
          console.log(uwu);
          showToast("Error: " + uwu, "red")
      }
  },

  start: () => {
      try {
          lessonBridge.utils.webApiUtil.startLesson();
      } catch (uwu) {
          console.log(uwu);
          showToast("Error: " + uwu, "red")
      }
  },

  resumeTimeOnTask: () => {
      lessonBridge.utils.webApiUtil.resumeTimeOnTask()
  },

  pauseTimeOnTask: () => {
      lessonBridge.utils.webApiUtil.pauseTimeOnTask()
  }
  // end main funcs (main obj)
};