-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2023-06-21 13:46:08
-- 服务器版本： 5.7.41-log
-- PHP 版本： 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `dcat-admin`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin_extensions`
--

CREATE TABLE `admin_extensions` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `version` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `is_enabled` tinyint(4) NOT NULL DEFAULT '0',
  `options` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `admin_extension_histories`
--

CREATE TABLE `admin_extension_histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` tinyint(4) NOT NULL DEFAULT '1',
  `version` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `detail` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `admin_menu`
--

CREATE TABLE `admin_menu` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` bigint(20) NOT NULL DEFAULT '0',
  `order` int(11) NOT NULL DEFAULT '0',
  `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `uri` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extension` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `show` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `admin_menu`
--

INSERT INTO `admin_menu` (`id`, `parent_id`, `order`, `title`, `icon`, `uri`, `extension`, `show`, `created_at`, `updated_at`) VALUES
(1, 0, 1, 'Index', 'feather icon-bar-chart-2', '/', '', 1, '2023-06-13 04:52:45', NULL),
(2, 0, 2, 'Admin', 'feather icon-settings', NULL, '', 1, '2023-06-13 04:52:45', '2023-06-13 16:02:28'),
(3, 2, 3, 'Users', NULL, 'auth/users', '', 1, '2023-06-13 04:52:45', '2023-06-13 16:02:20'),
(4, 2, 4, 'Roles', NULL, 'auth/roles', '', 1, '2023-06-13 04:52:45', '2023-06-13 16:02:39'),
(5, 2, 5, 'Permission', NULL, 'auth/permissions', '', 1, '2023-06-13 04:52:45', '2023-06-13 16:02:45'),
(6, 2, 6, 'Menu', NULL, 'auth/menu', '', 1, '2023-06-13 04:52:45', '2023-06-13 16:02:50'),
(7, 2, 7, 'Extensions', NULL, 'auth/extensions', '', 1, '2023-06-13 04:52:45', '2023-06-13 16:02:55'),
(13, 0, 13, '网站设置', 'fa-plane', '/setting', '', 1, '2023-06-13 10:26:25', '2023-06-13 16:01:39'),
(14, 0, 14, '广告管理', 'fa-address-book', 'advert', '', 1, '2023-06-13 11:04:05', '2023-06-13 11:16:40'),
(15, 0, 15, '地图标注', 'fa-h-square', '/map', '', 1, '2023-06-14 13:32:28', '2023-06-14 13:32:28');

-- --------------------------------------------------------

--
-- 表的结构 `admin_permissions`
--

CREATE TABLE `admin_permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `http_method` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `http_path` text COLLATE utf8mb4_unicode_ci,
  `order` int(11) NOT NULL DEFAULT '0',
  `parent_id` bigint(20) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `admin_permissions`
--

INSERT INTO `admin_permissions` (`id`, `name`, `slug`, `http_method`, `http_path`, `order`, `parent_id`, `created_at`, `updated_at`) VALUES
(1, 'Auth management', 'auth-management', '', '', 1, 0, '2023-06-13 04:52:45', NULL),
(2, 'Users', 'users', '', '/auth/users*', 2, 1, '2023-06-13 04:52:45', NULL),
(3, 'Roles', 'roles', '', '/auth/roles*', 3, 1, '2023-06-13 04:52:45', NULL),
(4, 'Permissions', 'permissions', '', '/auth/permissions*', 4, 1, '2023-06-13 04:52:45', NULL),
(5, 'Menu', 'menu', '', '/auth/menu*', 5, 1, '2023-06-13 04:52:45', NULL),
(6, 'Extension', 'extension', '', '/auth/extensions*', 6, 1, '2023-06-13 04:52:45', NULL),
(7, '网站管理', '网站管理', '', '/setting*', 7, 0, '2023-06-13 15:44:56', '2023-06-13 23:19:10'),
(8, '广告管理', '广告管理', '', '/advert*', 8, 0, '2023-06-13 15:46:37', '2023-06-13 23:19:04'),
(9, '地图标注', '地图标注', '', '/map*', 9, 0, '2023-06-14 13:30:32', '2023-06-14 13:32:47');

-- --------------------------------------------------------

--
-- 表的结构 `admin_permission_menu`
--

CREATE TABLE `admin_permission_menu` (
  `permission_id` bigint(20) NOT NULL,
  `menu_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `admin_permission_menu`
--

INSERT INTO `admin_permission_menu` (`permission_id`, `menu_id`, `created_at`, `updated_at`) VALUES
(7, 13, '2023-06-13 15:44:56', '2023-06-13 15:44:56'),
(8, 14, '2023-06-13 15:46:37', '2023-06-13 15:46:37'),
(9, 15, '2023-06-14 13:32:28', '2023-06-14 13:32:28');

-- --------------------------------------------------------

--
-- 表的结构 `admin_roles`
--

CREATE TABLE `admin_roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `admin_roles`
--

INSERT INTO `admin_roles` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Administrator', 'administrator', '2023-06-13 04:52:45', '2023-06-13 04:52:45'),
(2, '管理员', '管理员', '2023-06-13 15:39:58', '2023-06-13 15:39:58');

-- --------------------------------------------------------

--
-- 表的结构 `admin_role_menu`
--

CREATE TABLE `admin_role_menu` (
  `role_id` bigint(20) NOT NULL,
  `menu_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `admin_role_menu`
--

INSERT INTO `admin_role_menu` (`role_id`, `menu_id`, `created_at`, `updated_at`) VALUES
(1, 2, '2023-06-13 16:02:28', '2023-06-13 16:02:28'),
(1, 3, '2023-06-13 16:02:20', '2023-06-13 16:02:20'),
(1, 4, '2023-06-13 16:02:39', '2023-06-13 16:02:39'),
(1, 5, '2023-06-13 16:02:45', '2023-06-13 16:02:45'),
(1, 6, '2023-06-13 16:02:50', '2023-06-13 16:02:50'),
(1, 7, '2023-06-13 16:02:55', '2023-06-13 16:02:55'),
(2, 1, '2023-06-13 15:39:58', '2023-06-13 15:39:58'),
(2, 13, '2023-06-13 15:39:58', '2023-06-13 15:39:58'),
(2, 14, '2023-06-13 15:39:58', '2023-06-13 15:39:58'),
(2, 15, '2023-06-14 14:02:40', '2023-06-14 14:02:40');

-- --------------------------------------------------------

--
-- 表的结构 `admin_role_permissions`
--

CREATE TABLE `admin_role_permissions` (
  `role_id` bigint(20) NOT NULL,
  `permission_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `admin_role_permissions`
--

INSERT INTO `admin_role_permissions` (`role_id`, `permission_id`, `created_at`, `updated_at`) VALUES
(2, 7, '2023-06-13 15:47:12', '2023-06-13 15:47:12'),
(2, 8, '2023-06-13 15:47:12', '2023-06-13 15:47:12'),
(2, 9, '2023-06-14 14:02:40', '2023-06-14 14:02:40');

-- --------------------------------------------------------

--
-- 表的结构 `admin_role_users`
--

CREATE TABLE `admin_role_users` (
  `role_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `admin_role_users`
--

INSERT INTO `admin_role_users` (`role_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2023-06-13 04:52:45', '2023-06-13 04:52:45'),
(2, 2, '2023-06-13 15:40:21', '2023-06-13 15:40:21');

-- --------------------------------------------------------

--
-- 表的结构 `admin_settings`
--

CREATE TABLE `admin_settings` (
  `slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `admin_settings`
--

INSERT INTO `admin_settings` (`slug`, `value`, `created_at`, `updated_at`) VALUES
('notice', 'aaa1', '2023-06-13 10:47:00', '2023-06-13 10:49:18');

-- --------------------------------------------------------

--
-- 表的结构 `admin_users`
--

CREATE TABLE `admin_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `admin_users`
--

INSERT INTO `admin_users` (`id`, `username`, `password`, `name`, `avatar`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', '$2y$10$x29ljewfsE8z/oY4x3GAXu2eKvJ203XJzjDGrO6vGE2H9jHtNv/Ku', 'Administrator', NULL, NULL, '2023-06-13 04:52:45', '2023-06-14 14:05:35'),
(2, 'test', '$2y$10$BsMNUhawj1tE21gmCXrREOUBjShlgth4zJAbcaf3UPJaMVyLj9O1e', 'test', NULL, NULL, '2023-06-13 15:40:21', '2023-06-13 15:40:21');

-- --------------------------------------------------------

--
-- 表的结构 `advert`
--

CREATE TABLE `advert` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `url` varchar(500) NOT NULL COMMENT '图片url',
  `img_url` varchar(200) DEFAULT NULL,
  `sort` int(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '排序字段 越大越靠前',
  `state` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0下架/1上架',
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='广告表';

--
-- 转存表中的数据 `advert`
--

INSERT INTO `advert` (`id`, `name`, `url`, `img_url`, `sort`, `state`, `created_at`, `updated_at`) VALUES
(6, 'secret1', 'https://www.baidu.com/s?ie=UTF-8&wd=linux%20ubuntu%20%E5%AE%89%E8%A3%85git', 'images/fbf23ad74f3372757a5fdcdda1061f99.jpg', 3, 1, '2023-06-13 13:36:29', '2023-06-13 13:36:29'),
(7, 'secret', 'https://www.baidu.com/', NULL, 1, 1, '2023-06-18 11:32:30', '2023-06-18 11:34:46'),
(8, 'secret', 'https://www.baidu.com/', NULL, 100, 1, '2023-06-18 11:35:46', '2023-06-18 11:35:55');

-- --------------------------------------------------------

--
-- 表的结构 `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `map_marked_location`
--

CREATE TABLE `map_marked_location` (
  `id` bigint(11) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL COMMENT '地点名称',
  `address` varchar(400) NOT NULL COMMENT '详细地址',
  `contact_information` varchar(100) NOT NULL COMMENT '联系方式',
  `pic_url` text NOT NULL COMMENT '图片地址',
  `comment` varchar(300) NOT NULL COMMENT '评论',
  `lat` varchar(50) NOT NULL COMMENT '经度',
  `lng` varchar(50) NOT NULL COMMENT '纬度',
  `created_at` timestamp NOT NULL COMMENT '创建时间',
  `updated_at` timestamp NOT NULL COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `map_marked_location`
--

INSERT INTO `map_marked_location` (`id`, `name`, `address`, `contact_information`, `pic_url`, `comment`, `lat`, `lng`, `created_at`, `updated_at`) VALUES
(2, '1223', '', '2323', '23232', '12313', '223', '2323', '2023-06-14 20:01:19', '2023-06-14 20:01:19'),
(3, '1223', '', '2323', '23232', '12313', '223', '2323', '2023-06-14 20:01:23', '2023-06-14 20:01:23'),
(4, '2', '', '', '', '', '1', '1', '2023-06-14 12:09:49', '2023-06-14 12:09:49'),
(5, 'name', 'address', 'contact_information', '', 'comment', '1', '1', '2023-06-20 21:21:33', '2023-06-20 21:21:33'),
(6, 'name', 'address', 'contact_information', '', 'comment', '1', '1', '2023-06-20 21:24:33', '2023-06-20 21:24:33'),
(7, 'name', 'address', 'contact_information', '3333', 'comment', '1', '1', '2023-06-20 21:26:46', '2023-06-20 21:38:39');

-- --------------------------------------------------------

--
-- 表的结构 `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_01_04_173148_create_admin_tables', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2020_09_07_090635_create_admin_settings_table', 1),
(7, '2020_09_22_015815_create_admin_extensions_table', 1),
(8, '2020_11_01_083237_update_admin_menu_table', 1);

-- --------------------------------------------------------

--
-- 表的结构 `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转储表的索引
--

--
-- 表的索引 `admin_extensions`
--
ALTER TABLE `admin_extensions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_extensions_name_unique` (`name`);

--
-- 表的索引 `admin_extension_histories`
--
ALTER TABLE `admin_extension_histories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_extension_histories_name_index` (`name`);

--
-- 表的索引 `admin_menu`
--
ALTER TABLE `admin_menu`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `admin_permissions`
--
ALTER TABLE `admin_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_permissions_slug_unique` (`slug`);

--
-- 表的索引 `admin_permission_menu`
--
ALTER TABLE `admin_permission_menu`
  ADD UNIQUE KEY `admin_permission_menu_permission_id_menu_id_unique` (`permission_id`,`menu_id`);

--
-- 表的索引 `admin_roles`
--
ALTER TABLE `admin_roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_roles_slug_unique` (`slug`);

--
-- 表的索引 `admin_role_menu`
--
ALTER TABLE `admin_role_menu`
  ADD UNIQUE KEY `admin_role_menu_role_id_menu_id_unique` (`role_id`,`menu_id`);

--
-- 表的索引 `admin_role_permissions`
--
ALTER TABLE `admin_role_permissions`
  ADD UNIQUE KEY `admin_role_permissions_role_id_permission_id_unique` (`role_id`,`permission_id`);

--
-- 表的索引 `admin_role_users`
--
ALTER TABLE `admin_role_users`
  ADD UNIQUE KEY `admin_role_users_role_id_user_id_unique` (`role_id`,`user_id`);

--
-- 表的索引 `admin_settings`
--
ALTER TABLE `admin_settings`
  ADD PRIMARY KEY (`slug`);

--
-- 表的索引 `admin_users`
--
ALTER TABLE `admin_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_users_username_unique` (`username`);

--
-- 表的索引 `advert`
--
ALTER TABLE `advert`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- 表的索引 `map_marked_location`
--
ALTER TABLE `map_marked_location`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- 表的索引 `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin_extensions`
--
ALTER TABLE `admin_extensions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `admin_extension_histories`
--
ALTER TABLE `admin_extension_histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `admin_menu`
--
ALTER TABLE `admin_menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用表AUTO_INCREMENT `admin_permissions`
--
ALTER TABLE `admin_permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用表AUTO_INCREMENT `admin_roles`
--
ALTER TABLE `admin_roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `admin_users`
--
ALTER TABLE `admin_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `advert`
--
ALTER TABLE `advert`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `map_marked_location`
--
ALTER TABLE `map_marked_location`
  MODIFY `id` bigint(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用表AUTO_INCREMENT `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
