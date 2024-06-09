import passport from 'passport';

// function authMiddleware(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/login');
// }


// function authMiddleware(req, res, next) {
//     passport.authenticate('login', { session: false }, (err, user, info) => {
//         if (err) {
//             return next(err);
//         }
//         if (!user) {
//             req.user = null;
//         } else {
//             req.user = user;
//         }
//         next();
//     })(req, res, next);
// }
function authMiddleware(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
}


export default authMiddleware;