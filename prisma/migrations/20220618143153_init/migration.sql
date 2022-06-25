-- CreateTable
CREATE TABLE `Member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` ENUM('trainee', 'assessor', 'coordenador', 'diretor') NOT NULL,
    `team` ENUM('desenvolvimento', 'comercial', 'marketing') NOT NULL,
    `stack` ENUM('back_end', 'front_end', 'fullstack', 'web', 'mobile') NOT NULL,

    UNIQUE INDEX `Member_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
