
let numberOfFilms=prompt('qancha film korgansiz','');
let ask1=prompt("oxirgi ko'rgan filmlaringizdan biri","");
let  ask2=prompt("uni qancha baholagan bolardingzi","");

let personalMovieDB={
    count:numberOfFilms,
    movies:{[ask1]:ask2},
    actors:{},
    genres:[],
    privat: false
};
console.log(personalMovieDB.count); 
console.log(personalMovieDB.movies);



 


/* Uyga vazifa:

1) numberOfFilms o'zgaruvchisini yarating va undagi (— Qancha film ko'rgansiz?) savoliga foydalanuvchining javobini saqlang

2) personalMovieDB ob'ektini yarating va unga quyidagi keylarni qo'ying:
    - count - birinchi savolga javob shu erda saqlanadi
    - movies - bu keyda bo'sh ob'ektni saqlang
    - actors - bu keyda bo'sh ob'ektni saqlang
    - genres - bu erda bo'sh massiv saqlanadi
    - privat - bu key o'zida boolean qiymatini false saqlaydi

3) Foydalanuvchiga ikkita savol bering:
    - "Oxirgi ko'rgan filmlaringizdan biri?"
    - "Uni qancha baholagan bo'lardingiz?"
Javoblar alohida o'zgaruvchilarga joylashtirilishi kerak
personalMovieDB.movies ga javoblarni quyidagi formatda yozing:
    movies: {
        'logan': '8.1'
    }

Konsolda hamma narsa xatosiz ishlashini tekshiring */