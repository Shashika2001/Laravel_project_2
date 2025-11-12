<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
     {
        Product::insert([
            [
                'name' => 'Product 1',
                'description' => 'Short description for product 1',
                'price' => 199.99,
                'image_url' => 'https://via.placeholder.com/150',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Product 2',
                'description' => 'Short description for product 2',
                'price' => 299.99,
                'image_url' => 'https://via.placeholder.com/150',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Product 3',
                'description' => 'Short description for product 3',
                'price' => 399.99,
                'image_url' => 'https://via.placeholder.com/150',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Product 4',
                'description' => 'Short description for product 4',
                'price' => 499.99,
                'image_url' => 'https://via.placeholder.com/150',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Product 5',
                'description' => 'Short description for product 5',
                'price' => 599.99,
                'image_url' => 'https://via.placeholder.com/150',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
