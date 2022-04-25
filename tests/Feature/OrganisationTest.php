<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Response;
use Tests\TestCase;

class OrganisationTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * @test get users with admin
     */
    public function it_should_allow_admin_users_to_get_organisations()
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
          route('get-organisation'),
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
    public function it_should_not_allow_users_to_get_organisations()
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
          route('get-organisation'),
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
    public function it_should_allow_admin_users_to_add_organisation()
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
          route('create-organisation'),
          [
            'name' => 'New Decay',
          ],
        );
        $queryResponse->assertStatus(Response::HTTP_OK);
    }

    /**
     * @testadd contractor with contractor
     */
    public function it_should_not_allow_users_to_add_organisation()
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
          route('create-organisation'),
          [
              'name' => 'New Decay',
          ],
        );
        $queryResponse->assertStatus(Response::HTTP_FORBIDDEN);
    }
}
