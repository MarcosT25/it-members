-- CreateTable
CREATE TABLE `Lead` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `faseFunil` INTEGER NULL,
    `responsibleId` INTEGER NULL,

    UNIQUE INDEX `Lead_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Lead` ADD CONSTRAINT `Lead_responsibleId_fkey` FOREIGN KEY (`responsibleId`) REFERENCES `Member`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
