const fs = require('fs');
const path = require('path');

function renameToLowerCase(dir) {
    fs.readdirSync(dir).forEach(file => {
        const oldPath = path.join(dir, file);
        const newPath = path.join(dir, file.toLowerCase());

        if (oldPath !== newPath) {
            fs.renameSync(oldPath, newPath);
        }

        if (fs.statSync(newPath).isDirectory()) {
            renameToLowerCase(newPath);
        }
    });
}

// List of directories to process
const directories = [
    'assets',
    'assets/css',
    'assets/images',
    'assets/js',
    'landing',
    'landing/adult-index.html',
    'landing/selection.html',
    'momentum-app',
    'momentum-app/node_modules',
    'momentum-app/package-lock.json',
    'momentum-app/package.json',
    'momentum-kids-dashboard',
    'momentum-kids-dashboard/assets',
    'momentum-kids-dashboard/scripts',
    'momentum-kids-dashboard/styles',
    'momentum-kids-dashboard/5YO.html',
    'momentum-kids-dashboard/7YO.html',
    'momentum-kids-dashboard/index.html',
    'momentum-kids-dashboard/kidsvideos.html',
    'momentum-kids-dashboard/README.md',
    'momentum-kids-dashboard/rewards.html',
    'profiles',
    'profiles/adult',
    'profiles/adult/index.html',
    'profiles/adult/jordan.html',
    'profiles/adult/walter.html',
    'profiles/kids',
    'profiles/profile.html',
    'src',
    'src/index.ts',
    'workouts',
    'workouts/cardio.html',
    'workouts/dashboard.html',
    'workouts/Friday.html',
    'workouts/index.html',
    'workouts/Monday.html',
    'workouts/recipes.html',
    'workouts/Saturday.html',
    'workouts/strength.html',
    'workouts/Thursday.html',
    'workouts/Tuesday.html',
    'workouts/videos.html',
    'workouts/Wednesday.html',
    '.gitattributes',
    '.nojekyll',
    'Fitness.js',
    'index.html',
    'manifest.json',
    'README.md',
    'rename-files.js',
    'wrangler.toml'
];

// Process each directory or file
directories.forEach(dir => {
    const fullPath = path.join(__dirname, dir);
    if (fs.existsSync(fullPath)) {
        renameToLowerCase(fullPath);
    } else {
        console.warn(`Path does not exist: ${fullPath}`);
    }
});

console.log("All specified files and directories have been renamed to lowercase.");
