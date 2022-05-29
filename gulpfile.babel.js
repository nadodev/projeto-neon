import browserSync from "browser-sync";
import gulp from "gulp";
import autoprefix from "gulp-autoprefixer";
import babel from "gulp-babel";
import concat from "gulp-concat";
import sass from "gulp-sass";

exports.sass = () =>
  gulp
    .src(["./src/scss/main.scss"], ["./src/scss/*/**"])
    .pipe(sass({ outputStyle: "compressed", errLogToConsole: true }))
    .pipe(autoprefix())
    .pipe(concat("styles.min.css"))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());

exports.scripts = () =>
  gulp
    .src([
      "./src/js/lib/aos.min.js",
      "./src/js/lib/swiper.min.js",
      "./src/js/main.js",
    ])
    .pipe(concat("scripts.min.js"))
    .pipe(babel())
    .pipe(gulp.dest("./dist/js"))
    .pipe(browserSync.stream());

gulp.task("watch", () => {
  gulp.watch("./src/scss/**/**", gulp.series("sass"));
  gulp.watch("./src/js/**/**", gulp.series("scripts"));
});

gulp.task("serve", () => {
  browserSync.init({
    proxy: "http://127.0.0.1:5500",
  });

  gulp.watch("./src/scss/**/**", gulp.series("sass"));
  gulp.watch("./src/js/**/**", gulp.series("scripts"));
  gulp.watch("./**/*.html").on("change", browserSync.reload);
});

gulp.task("watch", () => {
  gulp.watch("./src/scss/**/**", gulp.series("sass"));
  gulp.watch("./src/js/**/**", gulp.series("scripts"));
});

// Default
gulp.task("default", gulp.series("serve"));
