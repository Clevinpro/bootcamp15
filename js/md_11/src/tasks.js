// Дана таблица с числами. По нажатию на кнопку найдите ячейку,
// в которой хранится максимальное число, и сделайте ее фон красным.

// <table>
//     <tr>
//         <td>25</td>
//         <td>11</td>
//         <td>8</td>
//     </tr>
//     <tr>
//         <td>54</td>
//         <td>13</td>
//         <td>22</td>
//     </tr>
//     <tr>
//         <td>15</td>
//         <td>23</td>
//         <td>6</td>
//     </tr>
// </table>
// <button>Жми</button>

const newTable = document.querySelectorAll('td')
console.log(newTable)







// Даны два селекта. В первом находятся страны,
// во втором - города. Сделайте так, чтобы когда
// выбирается определенная страна - в другом селекте
// появлялись города этой страны. В абзац ниже пишите
// выбранную страну и город через запятую.

// const cityArr = {
//     'aus': ['Мельбурн', 'Сидней', 'Аделаида', 'Брисбен', 'Хобарт'],
//     'jap': ['Токио', 'Киото', 'Осака', 'Иокогама'],
//     'sar': ['Кейптаун', 'Йоханесбург'],
//  }


// <select name="country" id="country">
//     <option value="aus">Австралия</option>
//     <option value="jap">Япония</option>
//     <option value="sar">ЮАР</option>
// </select>

// <select name="cities" id="cities"></select>
// <p class="select__result"></p>








// 1. ========================================
// Необходимо написать Функционал работы
// обычного юреза и админа сайта через классы.
// Для этого нужно создать общий класс User с
// необходимыми ключами и методами.

// 2. ========================================
// Необходимо авторизовать нас через prompt по
// эмейлу. Занести данные юзера в localStorage.
// Вывести имя юзера в шапку в класс ".header__user".
// Отрисовать юзеров (кто не админ) в табличном виде:
//   -- имя
//   -- кнопка подробнее(выводит подробное инфо в
//      алерт - user.email && user.about)
//   -- кнопка удалить(удаление юзера, если зашел
//      админ. необходимо будет проверять при
//      отрисовке ел-в через шаблонизацию)


// Создать Класс User с ключами:
// name, age, email
// Добавать метод getInfo(id) (функционал кнопки подробнее)

// Создать Класс SuperUser, который унаследует
// все от класса User
// Добавить поле userType со значением "admin"
// Добавить метод deleteUser(id) -
// (функционал кнопки подробнее)
