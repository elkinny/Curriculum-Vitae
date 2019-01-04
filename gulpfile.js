const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');

gulp.task('lint:style', () =>
  gulp.src('./src/scss/**/*.scss').pipe(
    gulpStylelint({
      failAfterError: false,
      reporters: [
        {
          formatter: 'string',
          console: true,
        },
      ],
    }),
  ),
);
