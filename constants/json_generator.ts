import type { LangOptionsType } from "./types/LocalesType"

type DefinationByLanguage = { [key in LangOptionsType]: string }

export const resultsByLocale: DefinationByLanguage = {
    'en-US': `/**

Hey there! Let's define the structure of the JSON data we need
- You can add comments, and the AI will understand them 
  to generate the JSON data accordingly!

*/

// Here is the improved TypeScript example for you:
type FakeUserListItem = {
    username: string; // Act like real.
    bio: string; // About the user (max 150 characters).
    birthdate: string; // I need "mm-dd-yyyy" format
    email: string;
    hobbies: string[];
};

/** 
 * Don't remove "result" variable!
 * This constant holds the final JSON data structure 
 */
const result = {
    users: [] as FakeUserListItem[] // Generate 3 users
};`,
    'ru-RU': `/** 

Привет! Давай определим структуру JSON-данных, которая нам нужна
- Вы можете добавлять комментарии, и ИИ поймет их 
  для генерации JSON-данных соответствующим образом!

*/


// Вот улучшенный пример TypeScript для вас:
type FakeUserListItem = {
    username: string; // Будь как настоящий.
    bio: string; // О пользователе (максимум 150 символов).
    birthdate: string; // Нужен формат "мм-дд-гггг"
    email: string;
    hobbies: string[];
};

/** 
*   Не удаляйте переменную "result"!
*   Эта константа содержит окончательную структуру JSON-данных 
*/
const result = {
    users: [] as FakeUserListItem[] // Сгенерировать 3 пользователей
};`,
    'az-AZ': `/** 

Salam! JSON məlumatlarının strukturunu təyin edək
- Şərhlər əlavə edə bilərsiniz, AI onları başa düşərək 
  JSON məlumatlarını müvafiq şəkildə generasiya edəcək!

*/


// Struktur üçün təkmilləşdirilmiş TypeScript nümunəsi:
type FakeUserListItem = {
    username: string; // Real kimi davran.
    bio: string; // İstifadəçi haqqında (maksimum 150 simvol).
    birthdate: string; // "mm-dd-yyyy" formatı lazımdır
    email: string;
    hobbies: string[];
};

/** 
*   "result" dəyişənini silməyin!
*   Bu sabit dəyişən JSON məlumat strukturunu saxlayır 
*/
const result = {
    users: [] as FakeUserListItem[] // 3 istifadəçi generasiya et
};`
}

export const resultsForClear = `const result = {};`;

export const resultsWithMessage: DefinationByLanguage = {
    'az-AZ': `/** 
* "result" dəyişənini silməyin!
* Bu sabit dəyişən JSON məlumat strukturunu saxlayır
* Sizə lazım olan type-lər və şərhlər əlavə edə bilərsiniz, 
* AI JSON məlumatlarını onlara müvafiq şəkildə generasiya edəcək 
*/
const result = {};`,

    'en-US': `/** 
* Don't remove "result" variable!
* this constant holds the final JSON data structure 
* You can add your type defination and comments, and the AI will understand them 
* to generate the JSON data accordingly!
* Happy coding ;)
*/
const result = {};`,

    'ru-RU': `/** 
* Не удаляйте переменную "result"!
* Эта константа содержит окончательную структуру данных JSON.
* Вы можете добавить определение типа и комментарии, и ИИ их распознает.
* для генерации соответствующих данных JSON!
* Удачного кодирования ;)
*/
const result = {};`,
}