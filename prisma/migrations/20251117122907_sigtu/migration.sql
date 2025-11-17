-- CreateTable
CREATE TABLE `Aluno` (
    `idAluno` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeAluno` VARCHAR(191) NOT NULL,
    `rg` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `nomeMae` VARCHAR(191) NOT NULL,
    `nomePai` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Aluno_rg_key`(`rg`),
    UNIQUE INDEX `Aluno_cpf_key`(`cpf`),
    PRIMARY KEY (`idAluno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `idEndereco` INTEGER NOT NULL AUTO_INCREMENT,
    `rua` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `uf` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `alunoId` INTEGER NOT NULL,

    UNIQUE INDEX `Endereco_alunoId_key`(`alunoId`),
    PRIMARY KEY (`idEndereco`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SituacaoFamiliar` (
    `idSituacao` INTEGER NOT NULL AUTO_INCREMENT,
    `compFamiliar` VARCHAR(191) NOT NULL,
    `tipoRes` VARCHAR(191) NOT NULL,
    `alunoId` INTEGER NOT NULL,

    UNIQUE INDEX `SituacaoFamiliar_alunoId_key`(`alunoId`),
    PRIMARY KEY (`idSituacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DadosAcademicos` (
    `idDados` INTEGER NOT NULL AUTO_INCREMENT,
    `universidade` VARCHAR(191) NOT NULL,
    `curso` VARCHAR(191) NOT NULL,
    `semestreAtual` INTEGER NOT NULL,
    `tempoTotalCurso` INTEGER NOT NULL,
    `anoConclusao` INTEGER NOT NULL,
    `frequenciaSemanal` INTEGER NOT NULL,
    `periodo` VARCHAR(191) NOT NULL,
    `horarioDetalhado` VARCHAR(191) NOT NULL,
    `alunoId` INTEGER NOT NULL,

    UNIQUE INDEX `DadosAcademicos_alunoId_key`(`alunoId`),
    PRIMARY KEY (`idDados`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InformacoesBolsa` (
    `idBolsa` INTEGER NOT NULL AUTO_INCREMENT,
    `possuiBolsa` BOOLEAN NOT NULL,
    `tipo` VARCHAR(191) NULL,
    `porcentagem` INTEGER NULL,
    `alunoId` INTEGER NOT NULL,

    UNIQUE INDEX `InformacoesBolsa_alunoId_key`(`alunoId`),
    PRIMARY KEY (`idBolsa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contato` (
    `idContato` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `telRes` VARCHAR(191) NULL,
    `telEstud` VARCHAR(191) NULL,
    `alunoId` INTEGER NOT NULL,

    UNIQUE INDEX `Contato_alunoId_key`(`alunoId`),
    PRIMARY KEY (`idContato`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`idAluno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SituacaoFamiliar` ADD CONSTRAINT `SituacaoFamiliar_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`idAluno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DadosAcademicos` ADD CONSTRAINT `DadosAcademicos_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`idAluno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InformacoesBolsa` ADD CONSTRAINT `InformacoesBolsa_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`idAluno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contato` ADD CONSTRAINT `Contato_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`idAluno`) ON DELETE RESTRICT ON UPDATE CASCADE;
