/*
  Warnings:

  - You are about to drop the column `dharmesh` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `patel` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "dharmesh",
DROP COLUMN "patel";

-- CreateTable
CREATE TABLE "public"."country_mas" (
    "id_country" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(15) NOT NULL,
    "dial_code" VARCHAR(5),
    "status" SMALLINT NOT NULL DEFAULT 1,
    "id_created_by" UUID,
    "id_updated_by" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "country_mas_pkey" PRIMARY KEY ("id_country")
);

-- CreateTable
CREATE TABLE "public"."state_mas" (
    "id_state" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(20) NOT NULL,
    "id_country" UUID NOT NULL,
    "status" SMALLINT NOT NULL DEFAULT 1,
    "id_created_by" UUID,
    "id_updated_by" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "state_mas_pkey" PRIMARY KEY ("id_state")
);

-- CreateTable
CREATE TABLE "public"."city_mas" (
    "id_city" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(20) NOT NULL,
    "id_state" UUID NOT NULL,
    "id_country" UUID NOT NULL,
    "status" SMALLINT NOT NULL DEFAULT 1,
    "id_created_by" UUID,
    "id_updated_by" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "city_mas_pkey" PRIMARY KEY ("id_city")
);

-- CreateTable
CREATE TABLE "public"."banks_mas" (
    "id_bank" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(50) NOT NULL,
    "short_name" VARCHAR(5),
    "id_city" UUID,
    "id_state" UUID,
    "id_country" UUID NOT NULL,
    "status" SMALLINT NOT NULL DEFAULT 1,
    "id_created_by" UUID,
    "id_updated_by" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "banks_mas_pkey" PRIMARY KEY ("id_bank")
);

-- CreateTable
CREATE TABLE "public"."document_groups" (
    "id_document_group" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(25) NOT NULL,
    "status" SMALLINT NOT NULL DEFAULT 1,
    "id_created_by" UUID,
    "id_updated_by" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "document_groups_pkey" PRIMARY KEY ("id_document_group")
);

-- CreateTable
CREATE TABLE "public"."documents" (
    "id_document" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_document_group" UUID NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "status" SMALLINT NOT NULL DEFAULT 1,
    "id_created_by" UUID,
    "id_updated_by" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id_document")
);

-- CreateTable
CREATE TABLE "public"."address_types" (
    "id_address_type" UUID NOT NULL DEFAULT gen_random_uuid(),
    "address_type" VARCHAR(25) NOT NULL,
    "status" SMALLINT NOT NULL DEFAULT 1,
    "id_created_by" UUID,
    "id_updated_by" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "address_types_pkey" PRIMARY KEY ("id_address_type")
);

-- CreateTable
CREATE TABLE "public"."contact_types" (
    "id_contact_type" UUID NOT NULL DEFAULT gen_random_uuid(),
    "contact_type" VARCHAR(50) NOT NULL,
    "status" SMALLINT NOT NULL DEFAULT 1,
    "id_created_by" UUID,
    "id_updated_by" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "contact_types_pkey" PRIMARY KEY ("id_contact_type")
);

-- CreateIndex
CREATE UNIQUE INDEX "country_mas_name_key" ON "public"."country_mas"("name");

-- CreateIndex
CREATE UNIQUE INDEX "state_mas_name_key" ON "public"."state_mas"("name");

-- CreateIndex
CREATE UNIQUE INDEX "city_mas_name_key" ON "public"."city_mas"("name");

-- CreateIndex
CREATE UNIQUE INDEX "banks_mas_name_key" ON "public"."banks_mas"("name");

-- CreateIndex
CREATE UNIQUE INDEX "banks_mas_short_name_key" ON "public"."banks_mas"("short_name");

-- CreateIndex
CREATE UNIQUE INDEX "document_groups_name_key" ON "public"."document_groups"("name");

-- CreateIndex
CREATE UNIQUE INDEX "documents_name_key" ON "public"."documents"("name");

-- CreateIndex
CREATE UNIQUE INDEX "address_types_address_type_key" ON "public"."address_types"("address_type");

-- CreateIndex
CREATE UNIQUE INDEX "contact_types_contact_type_key" ON "public"."contact_types"("contact_type");
