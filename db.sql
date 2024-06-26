USE [master]
GO
/****** Object:  Database [TP4_DAI]    Script Date: 3/5/2024 09:52:30 ******/
CREATE DATABASE [TP4_DAI]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'TP4_DAI', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\TP4_DAI.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'TP4_DAI_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\TP4_DAI_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [TP4_DAI] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [TP4_DAI].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [TP4_DAI] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [TP4_DAI] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [TP4_DAI] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [TP4_DAI] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [TP4_DAI] SET ARITHABORT OFF 
GO
ALTER DATABASE [TP4_DAI] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [TP4_DAI] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [TP4_DAI] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [TP4_DAI] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [TP4_DAI] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [TP4_DAI] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [TP4_DAI] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [TP4_DAI] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [TP4_DAI] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [TP4_DAI] SET  DISABLE_BROKER 
GO
ALTER DATABASE [TP4_DAI] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [TP4_DAI] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [TP4_DAI] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [TP4_DAI] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [TP4_DAI] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [TP4_DAI] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [TP4_DAI] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [TP4_DAI] SET RECOVERY FULL 
GO
ALTER DATABASE [TP4_DAI] SET  MULTI_USER 
GO
ALTER DATABASE [TP4_DAI] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [TP4_DAI] SET DB_CHAINING OFF 
GO
ALTER DATABASE [TP4_DAI] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [TP4_DAI] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [TP4_DAI] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'TP4_DAI', N'ON'
GO
ALTER DATABASE [TP4_DAI] SET QUERY_STORE = OFF
GO
USE [TP4_DAI]
GO
/****** Object:  User [alumno]    Script Date: 3/5/2024 09:52:30 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[provinces]    Script Date: 3/5/2024 09:52:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[provinces](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](max) NOT NULL,
	[fullName] [varchar](max) NOT NULL,
	[latitude] [float] NOT NULL,
	[longitude] [float] NOT NULL,
	[displayOrder] [int] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[provinces] ON 

INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (1, N'Buenos Aires', N'Buenos Aires, Argentina', -34.6037, -58.3816, 1)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (2, N'Catamarca', N'Catamarca, Argentina', -28.4696, -65.7852, 2)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (3, N'Chaco', N'Chaco, Argentina', -26.8406, -60.7697, 3)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (4, N'Chubut', N'Chubut, Argentina', -43.2997, -65.1023, 4)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (5, N'Ciudad Autónoma de Buenos Aires', N'Ciudad Autónoma de Buenos Aires, Argentina', -34.6037, -58.3816, 5)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (6, N'Córdoba', N'Córdoba, Argentina', -31.4201, -64.1888, 6)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (7, N'Corrientes', N'Corrientes, Argentina', -27.4692, -58.8306, 7)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (8, N'Entre Ríos', N'Entre Ríos, Argentina', -31.7747, -60.4956, 8)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (9, N'Formosa', N'Formosa, Argentina', -26.1775, -58.1781, 9)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (10, N'Jujuy', N'Jujuy, Argentina', -24.1858, -65.2995, 10)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (11, N'La Pampa', N'La Pampa, Argentina', -36.6142, -64.283, 11)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (12, N'La Rioja', N'La Rioja, Argentina', -29.4131, -66.8558, 12)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (13, N'Mendoza', N'Mendoza, Argentina', -32.8908, -68.8272, 13)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (14, N'Misiones', N'Misiones, Argentina', -27.3363, -55.8964, 14)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (15, N'Neuquén', N'Neuquén, Argentina', -38.9517, -68.059, 15)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (16, N'Río Negro', N'Río Negro, Argentina', -40.8135, -62.9967, 16)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (17, N'Salta', N'Salta, Argentina', -24.7821, -65.4232, 17)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (18, N'San Juan', N'San Juan, Argentina', -31.5375, -68.5364, 18)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (19, N'San Luis', N'San Luis, Argentina', -33.3017, -66.3378, 19)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (20, N'Santa Cruz', N'Santa Cruz, Argentina', -51.6226, -69.2181, 20)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (21, N'Santa Fe', N'Santa Fe, Argentina', -31.6333, -60.7, 21)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (22, N'Santiago del Estero', N'Santiago del Estero, Argentina', -27.7951, -64.2615, 22)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (23, N'Tierra del Fuego, Antártida e Islas del Atlántico Sur', N'Tierra del Fuego, Antártida e Islas del Atlántico Sur, Argentina', -54.8078, -68.307, 23)
INSERT [dbo].[provinces] ([id], [name], [fullName], [latitude], [longitude], [displayOrder]) VALUES (24, N'Tucumán', N'Tucumán, Argentina', -26.8083, -65.2176, 24)
SET IDENTITY_INSERT [dbo].[provinces] OFF
GO
USE [master]
GO
ALTER DATABASE [TP4_DAI] SET  READ_WRITE 
GO
