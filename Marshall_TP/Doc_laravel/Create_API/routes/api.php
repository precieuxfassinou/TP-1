<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/articles', 'Api\ArticleController@index');
    Route::post('/articles', 'Api\ArticleController@store')->middleware('can:isAdmin');
    Route::put('/articles/{article}', 'Api\ArticleController@update')->middleware('can:isAdmin');
    Route::delete('/articles/{article}', 'Api\ArticleController@destroy')->middleware('can:isAdmin');
    Route::apiResource('product', Api\ProductController::class);
    Route::post('/product', [ProductController::class, 'store']);
    Route::delete('/product/{product}', [ProductController::class, 'destroy']);
    Route::get('/product', [ArticleController::class, 'index']);
    Route::get('/product/{product}', [ProductController::class, 'show']);
    Route::apiResource('product', ProductController::class)->except(['store', 'destroy', 'index', 'show']);
});

Route::middleware(['auth:sanctum', 'isAdmin'])->delete('/product/{product}', [ProductController::class, 'destroy']);