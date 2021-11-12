using Microsoft.EntityFrameworkCore.Migrations;

namespace album_collection.Migrations
{
    public partial class updatedSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 1,
                column: "ImageURL",
                value: "https://static.wikia.nocookie.net/pinkfloyd/images/f/f5/The_Wall.jpg/revision/latest?cb=20181104235825");

            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 2,
                column: "ImageURL",
                value: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Minor_Threat_-_Out_of_Step.jpg/220px-Minor_Threat_-_Out_of_Step.jpg");

            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 3,
                column: "ImageURL",
                value: "https://cdn.shopify.com/s/files/1/0153/0645/products/notaprettygirl_1024x1024.jpeg?v=1571262453");

            migrationBuilder.UpdateData(
                table: "Artists",
                keyColumn: "Id",
                keyValue: 1,
                column: "ImageURL",
                value: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Pink_Floyd_-_all_members.jpg/250px-Pink_Floyd_-_all_members.jpg");

            migrationBuilder.UpdateData(
                table: "Artists",
                keyColumn: "Id",
                keyValue: 2,
                column: "ImageURL",
                value: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Minor-threat-malcolm-riviera.jpg/260px-Minor-threat-malcolm-riviera.jpg");

            migrationBuilder.UpdateData(
                table: "Artists",
                keyColumn: "Id",
                keyValue: 3,
                column: "ImageURL",
                value: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ani_Difranco_Ancienne_Belgique.jpg/220px-Ani_Difranco_Ancienne_Belgique.jpg");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 1,
                column: "ImageURL",
                value: "www.tbd");

            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 2,
                column: "ImageURL",
                value: "www.tbd");

            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 3,
                column: "ImageURL",
                value: "www.url");

            migrationBuilder.UpdateData(
                table: "Artists",
                keyColumn: "Id",
                keyValue: 1,
                column: "ImageURL",
                value: "www.tbd");

            migrationBuilder.UpdateData(
                table: "Artists",
                keyColumn: "Id",
                keyValue: 2,
                column: "ImageURL",
                value: "www.tbd");

            migrationBuilder.UpdateData(
                table: "Artists",
                keyColumn: "Id",
                keyValue: 3,
                column: "ImageURL",
                value: "www.url");
        }
    }
}
