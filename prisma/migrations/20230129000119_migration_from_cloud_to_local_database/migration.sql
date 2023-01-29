-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "places" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rating" TEXT,

    CONSTRAINT "places_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "places_categories" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "place_id" INTEGER NOT NULL,

    CONSTRAINT "places_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "places_locations" (
    "id" SERIAL NOT NULL,
    "place_id" INTEGER NOT NULL,
    "location_id" INTEGER NOT NULL,

    CONSTRAINT "places_locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public.places" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "rating" TEXT,

    CONSTRAINT "places_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "places_name_key" ON "places"("name");

-- CreateIndex
CREATE UNIQUE INDEX "public.places_name_key" ON "public.places"("name");

-- AddForeignKey
ALTER TABLE "places_categories" ADD CONSTRAINT "places_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "places_categories" ADD CONSTRAINT "places_categories_place_id_fkey" FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "places_locations" ADD CONSTRAINT "places_locations_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "places_locations" ADD CONSTRAINT "places_locations_place_id_fkey" FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
