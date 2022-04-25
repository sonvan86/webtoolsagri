<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Response;
use Tests\TestCase;

class UserTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * @test get users with admin
     */
    public function it_should_allow_admin_users_to_get_data()
    {
        $user = User::factory()->create([
            'type' => User::ADMIN_USER
        ]);

        $loginResponse = $this->post(
            route('login'),
            [
                'email' => $user->email,
                'password' => 'password',
            ],
        );

        $loginResponse->assertRedirect(route('home'));

        $queryResponse = $this->get(
          route('search-user'),
          [
              'page' => 1,
              'keyword' => '',
          ],
        );
        $queryResponse->assertStatus(Response::HTTP_OK);
    }

    /**
     * @test get users with contractor
     */
    public function it_should_not_allow_users_to_get_data()
    {
        $user = User::factory()->create();

        $loginResponse = $this->post(
            route('login'),
            [
                'email' => $user->email,
                'password' => 'password',
            ],
        );

        $loginResponse->assertRedirect(route('home'));

        $queryResponse = $this->get(
          route('search-user'),
          [
              'page' => 1,
              'keyword' => '',
          ],
        );
        $queryResponse->assertStatus(Response::HTTP_FORBIDDEN);
    }

    /**
     * @test add contractor with admin
     */
    public function it_should_allow_admin_users_to_add_data()
    {
        $user = User::factory()->create([
            'type' => User::ADMIN_USER
        ]);

        $loginResponse = $this->post(
            route('login'),
            [
                'email' => $user->email,
                'password' => 'password',
            ],
        );

        $loginResponse->assertRedirect(route('home'));

        $queryResponse = $this->get(
          route('create-user'),
          [
              'name' => 'Nguyen Van Teo',
              'email' => 'teo.nguyen@van.com',
              'contract_start' => '2022-01-01',
              'page' => 1,
              'keyword' => ''
          ],
        );
        $queryResponse->assertStatus(Response::HTTP_OK);
    }

    /**
     * @testadd contractor with contractor
     */
    public function it_should_not_allow_users_to_add_data()
    {
        $user = User::factory()->create();

        $loginResponse = $this->post(
            route('login'),
            [
                'email' => $user->email,
                'password' => 'password',
            ],
        );

        $loginResponse->assertRedirect(route('home'));

        $queryResponse = $this->get(
          route('create-user'),
          [
              'name' => 'Nguyen Van Teo',
              'email' => 'teo.nguyen@van.com',
              'contract_start' => '2022-01-01',
              'page' => 1,
              'keyword' => ''
          ],
        );
        $queryResponse->assertStatus(Response::HTTP_FORBIDDEN);
    }
}
