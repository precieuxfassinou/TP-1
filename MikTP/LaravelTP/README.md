Install sqlite

Sudo apt install sqlite3

Run php artisan serve

Use postman to test Apis

Route::post('/articles', [ArticleController::class, 'store']);
Route::delete('/articles/{article}', [ArticleController::class, 'destroy']);
Route::get('/articles', [ArticleController::class, 'index']);
Route::get('/articles/{article}', [ArticleController::class, 'show']);
