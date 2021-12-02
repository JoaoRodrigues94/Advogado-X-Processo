-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: dados212n
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `advogado -adv`
--

DROP TABLE IF EXISTS `advogado -adv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `advogado -adv` (
  `adv_codigo` int NOT NULL AUTO_INCREMENT,
  `adv_nome` varchar(20) DEFAULT NULL,
  `adv_apelido` varchar(10) DEFAULT NULL,
  `adv_sexo` char(1) DEFAULT NULL,
  `adv_faculdade` varchar(10) DEFAULT NULL,
  `adv_dtformatura` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`adv_codigo`),
  KEY `fk_adv_codigo_idx` (`adv_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advogado -adv`
--

LOCK TABLES `advogado -adv` WRITE;
/*!40000 ALTER TABLE `advogado -adv` DISABLE KEYS */;
INSERT INTO `advogado -adv` VALUES (1,'Sidnei','Syd','M','Brejão','20-11-2019'),(2,'Clotilde','Clo','F','USP','12/12/2000'),(3,'Cleonice','Cleo','F','Brejão','01/01/2021');
/*!40000 ALTER TABLE `advogado -adv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `processo - pro`
--

DROP TABLE IF EXISTS `processo - pro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `processo - pro` (
  `pro_codigo` int NOT NULL AUTO_INCREMENT,
  `pro_nomereu` varchar(20) DEFAULT NULL,
  `pro_descricao` char(20) DEFAULT NULL,
  `pro_varatribunal` varchar(15) DEFAULT NULL,
  `pro_dataprocesso` varchar(10) DEFAULT NULL,
  `adv_codigo` int NOT NULL,
  PRIMARY KEY (`pro_codigo`),
  KEY `fk_pro_codigo_idx` (`pro_codigo`),
  KEY `fk_adv_codigo_idx` (`adv_codigo`),
  CONSTRAINT `fk_pro_codigo` FOREIGN KEY (`adv_codigo`) REFERENCES `advogado -adv` (`adv_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `processo - pro`
--

LOCK TABLES `processo - pro` WRITE;
/*!40000 ALTER TABLE `processo - pro` DISABLE KEYS */;
INSERT INTO `processo - pro` VALUES (1,'Diego','Trabalhista','Trabalho','20/11/2021',1),(2,'Maria','Pensão Alimenticia','Civil','01/01/2022',3),(3,'Marlon','Processo Criminal','1° Criminal','12/12/2021',2);
/*!40000 ALTER TABLE `processo - pro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'dados212n'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-01 21:03:10
