var gulp        = require('gulp'),
    gutil       = require('gulp-util' ),
    ftp         = require('vinyl-ftp');


gulp.task('deploy', function() {

    var conn = ftp.create({
        host:      'ftp46.hostia.name',
        user:      'job.zerrocull@zerrocull.ru',
        password:  'mGCX9ss9',
        parallel:  10,
        log: gutil.log
    });

    var globs = [
        'public/**',
        'public/.htaccess',
    ];
    return gulp.src(globs, {buffer: false})
        .pipe(conn.dest('/'));

});
