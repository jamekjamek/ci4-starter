<?php

use App\Database\Seeds\OrangSeeder;
use App\Models\Admin\OrangModel;
use CodeIgniter\Test\CIUnitTestCase;
use CodeIgniter\Test\DatabaseTestTrait;
use Tests\Support\Models\ExampleModel;

/**
 * @internal
 */
final class OrangDatabaseTest extends CIUnitTestCase
{
    use DatabaseTestTrait;
    // For Migrations
    protected $migrate     = true;
    protected $migrateOnce = true;
    protected $refresh     = true;
    protected $namespace = 'App';

    protected $seed = OrangSeeder::class;
    protected $seedOnce = true;


    public function testModelFindAll()
    {
        $model = new OrangModel();

        // Get every row created by ExampleSeeder
        $objects = $model->findAll();

        // Make sure the count is as expected
        $this->assertCount(100, $objects);
    }

    public function testInsertData()
    {
        $model = new OrangModel();

        $data = [
            'nama' => 'Test',
            'alamat' => 'Alamat test',
        ];

        $result = $model->insert($data, false);
        $this->assertTrue($result);

        $insertId = $model->getInsertID();
        $this->assertNotEmpty($insertId);
    }

    public function testGetData()
    {
        $model = new OrangModel();
        $data = $model->find(101);
        $this->assertIsObject($data);
        $this->assertEquals('Test', $data->nama);
        $this->assertEquals('Alamat test', $data->alamat);
    }

    public function testRemoveData()
    {
        $model = new OrangModel();

        $this->assertTrue($model->delete(101));
    }
}
