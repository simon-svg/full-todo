<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('todos')->insert([
            [
                'value' => 'to talk with Nelly',
                'done' => false,
            ],
            [
                'value' => 'create a full stacke todo list',
                'done' => false,
            ],
        ]);
    }
}
