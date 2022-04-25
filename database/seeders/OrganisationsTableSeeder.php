<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Organisation;

class OrganisationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Organisation::factory()->create([
            'name' => "Farmer Joe's Company"
        ]);
        Organisation::factory()->count(10)->create();
    }
}
