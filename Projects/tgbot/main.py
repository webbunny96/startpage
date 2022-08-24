
from aiogram.utils.markdown import *
from aiogram import Bot, Dispatcher, executor, types
import aiogram.utils.markdown as fmt
from uuid import uuid4

from aiogram.types import   ReplyKeyboardRemove, \
    ReplyKeyboardMarkup, KeyboardButton, \
    InlineKeyboardMarkup, InlineKeyboardButton

from aiogram.utils.exceptions import (MessageToEditNotFound, MessageCantBeEdited, MessageCantBeDeleted,
                                      MessageToDeleteNotFound)

from telegram import ParseMode
import config
import logging

game_short_name = "hkjhgkgj_menu_bot"
# Объект бота
bot = Bot(token = config.BOT_TOKEN, parse_mode=types.ParseMode.HTML)
# Диспетчер для бота
dp = Dispatcher(bot)
# Включаем логирование, чтобы не пропустить важные сообщения
logging.basicConfig(level=logging.INFO)


key_res = types.InlineKeyboardMarkup()
key_res_btn = types.InlineKeyboardButton(text="/start", callback_data="restart_bot")
key_res.add(key_res_btn)

key_btn1 = types.InlineKeyboardMarkup()
key_btn2 = types.InlineKeyboardMarkup()
key_btn3 = types.InlineKeyboardMarkup()

key_game = types.InlineKeyboardMarkup()

btn1 = types.InlineKeyboardButton(text="Вариант 1", callback_data="restart_bot")
key_btn1.add(btn1)
btn2 = types.InlineKeyboardButton(text="Вариант 2", callback_data="restart_bot")
key_btn2.add(btn2)
btn3 = types.InlineKeyboardButton(text="Вариант 3", callback_data="restart_bot")
key_btn3.add(btn3)

btnGame = types.InlineKeyboardButton(text="Начать Общение ", callback_data="restart_bot")
key_game.add(btnGame)

keyboard = types.ReplyKeyboardMarkup()



button_1 = types.KeyboardButton(text="Menu1")
button_2 = types.KeyboardButton(text="Menu2")
button_3 = types.KeyboardButton(text="Menu3")
button_4 = types.KeyboardButton(text="Menu4")
button_5 = types.KeyboardButton(text="Menu5")

button_6 = types.KeyboardButton(text="Menu6")
button_7 = types.KeyboardButton(text="Menu7")

button_8 = types.KeyboardButton(text="Menu8")

button_9 = types.KeyboardButton(text="Menu9inGame")
button_10 = types.KeyboardButton(text="SubMenu")

gameBtn = btnGame

keyboard.add(button_1)
keyboard.add(button_2)
keyboard.add(button_3)
keyboard.add(button_4)
keyboard.add(button_5)
keyboard.add(button_6)

keyboard.add(button_7)
keyboard.add(button_8)

keyboard.add(button_9)

keyboard.add(button_10)
keyboard.add(key_res_btn)

import asyncio
from contextlib import suppress



async def delete_message(message: types.Message, sleep_time: int = 0):
    await asyncio.sleep(sleep_time)
    with suppress(MessageCantBeDeleted, MessageToDeleteNotFound):
        await message.delete()

def get_keyboard_menu1(width=2):
    # Генерация клавиатуры.
    buttons = [
        types.InlineKeyboardButton(text="Вариант 1", callback_game = game_short_name),
    ]
    # Благодаря row_width=2, в первом ряду будет две кнопки, а оставшаяся одна
    # уйдёт на следующую строку
    keyboard = types.InlineKeyboardMarkup(row_width=width)
    keyboard.add(*buttons)
    return keyboard

def get_keyboard_Game(width=2):
    # Генерация клавиатуры.
    buttons = [
        types.InlineKeyboardButton(text="Начать общение с ботом", callback_game = game_short_name),
    ]
    # Благодаря row_width=2, в первом ряду будет две кнопки, а оставшаяся одна
    # уйдёт на следующую строку
    keyboard = types.InlineKeyboardMarkup(row_width=width)
    keyboard.add(*buttons)
    return keyboard

def get_keyboard_menu2():
    # Генерация клавиатуры.
    buttons = [
        types.InlineKeyboardButton(text="Вариант 1", callback_data=game_short_name),
        types.InlineKeyboardButton(text="Вариант 2", callback_data="change2"),
        types.InlineKeyboardButton(text="Вариант 3", callback_data="change3"),
        types.InlineKeyboardButton(text="Вариант 4", callback_data="change4")
    ]
    # Благодаря row_width=2, в первом ряду будет две кнопки, а оставшаяся одна
    # уйдёт на следующую строку
    keyboard = types.InlineKeyboardMarkup(row_width=1)
    keyboard.add(*buttons)
    return keyboard

def get_keyboard_menu3():
    # Генерация клавиатуры.
    buttons = [
        types.InlineKeyboardButton(text="Вариант 1", callback_data="change1"),
        types.InlineKeyboardButton(text="Вариант 2", callback_data="change2"),
        types.InlineKeyboardButton(text="Вариант 3", callback_data="change3"),
        types.InlineKeyboardButton(text="Вариант 4", callback_data="change4")
    ]
    # Благодаря row_width=2, в первом ряду будет две кнопки, а оставшаяся одна
    # уйдёт на следующую строку
    keyboard = types.InlineKeyboardMarkup(row_width=3)
    keyboard.add(*buttons)
    return keyboard

def get_keyboard_menu4():
    # Генерация клавиатуры.
    buttons = [
        types.InlineKeyboardButton(text="Вариант 1", callback_data="change1"),
        types.InlineKeyboardButton(text="Вариант 2", callback_data="change2"),
        types.InlineKeyboardButton(text="Вариант 3", callback_data="change3"),
        types.InlineKeyboardButton(text="Вариант 4", callback_data="change4")
    ]
    # Благодаря row_width=2, в первом ряду будет две кнопки, а оставшаяся одна
    # уйдёт на следующую строку
    keyboard = types.InlineKeyboardMarkup(row_width=4)
    keyboard.add(*buttons)
    return keyboard

@dp.message_handler(commands="start")
async def cmd_start(message: types.Message):
    await message.answer("Вас приветсвует тестовий телеграм бот \nВыберете необходимое меню:", reply_markup=keyboard)
    await bot.send_game(message.chat.id, game_short_name , reply_markup = get_keyboard_Game())
    


@dp.message_handler(lambda message: message.text == "Menu1")
async def without_puree(message: types.Message):
    await message.answer("Пример меню 1", reply_markup=get_keyboard_menu1())

@dp.message_handler(lambda message: message.text == "Menu2")
async def without_puree(message: types.Message):
    await message.answer("Пример меню 2", reply_markup=get_keyboard_menu2())

@dp.message_handler(lambda message: message.text == "Menu3")

async def without_puree(message: types.Message):
    await message.answer("Пример меню 3", reply_markup=get_keyboard_menu3())


@dp.message_handler(lambda message: message.text == "Menu4")
async def without_puree(message: types.Message):
    await message.answer(
        "<a href='https://www.imgonline.com.ua/examples/bee-on-daisy.jpg'>⁠</a>",
        parse_mode=types.ParseMode.HTML, reply_markup=key_btn1)
    await message.answer(
        "<a href='https://img5.goodfon.ru/wallpaper/nbig/3/73/abstraktsiia-antisfera-vodovorot-krasok-kartinka-chernyi-fon.jpg'>⁠</a>",
        parse_mode=types.ParseMode.HTML, reply_markup=key_btn2)
    await message.answer(
        "<a href='https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'>⁠</a>",
        parse_mode=types.ParseMode.HTML, reply_markup=key_btn3)


@dp.message_handler(lambda message: message.text == "Menu5")
async def without_puree(message: types.Message):
    photo = open('./Icon0.jpg', 'rb')
    await bot.send_photo(message.chat.id, photo)
    await message.answer("подробнее:", reply_markup=key_btn1)
    
    photo = open('./Icon2.jpg', 'rb')
    await bot.send_photo(message.chat.id, photo)
    await message.answer("подробнее:", reply_markup=key_btn2)

    photo = open('./Icon1.jpg', 'rb')
    await bot.send_photo(message.chat.id, photo)
    await message.answer("подробнее:", reply_markup=key_btn3)

@dp.message_handler(lambda message: message.text == "Menu6")
async def without_puree(message: types.Message):
    media = types.MediaGroup()
    media.attach_photo(types.InputFile('./Icon0.jpg'))
    media.attach_photo(types.InputFile('./Icon1.jpg'))
    media.attach_photo(types.InputFile('./Icon2.jpg'))

    await bot.send_media_group(message.chat.id, media=media)
    await message.answer("<pre>                                                            ​⁠</pre>", reply_markup=get_keyboard_menu1(3), parse_mode=ParseMode.HTML)
    
    
@dp.message_handler(lambda message: message.text == "Menu7")
async def without_puree(message: types.Message):
    await message.answer(
        "<a href='t.me/Test687682Bot?start=TestLInk'>testLink⁠</a>",
        parse_mode=types.ParseMode.HTML, reply_markup=get_keyboard_menu1(3))


@dp.message_handler(lambda message: message.text == "SubMenu")
async def without_puree(message: types.Message):
    sub_keyboard = types.ReplyKeyboardMarkup()
    sub_button_1 = types.KeyboardButton(text="sub_Menu1")
    sub_button_2 = types.KeyboardButton(text="sub_Menu2")
    back_to_menu = types.KeyboardButton(text="$_Вернуться в главное меню")
    
    sub_keyboard.add(sub_button_1)
    sub_keyboard.add(sub_button_2)
    sub_keyboard.add(back_to_menu)
    sub_keyboard.add(key_res_btn)
    await message.answer("Вы перешли в подменю", reply_markup=sub_keyboard)
    #await message.answer("Перезапуск бота:",reply_markup=key_res)


@dp.message_handler(lambda message: message.text == "Menu8")
async def without_puree(message: types.Message):
    media = types.MediaGroup()
    media.attach_photo(types.InputFile('./Icons.jpg'))

    await bot.send_media_group(message.chat.id, media=media)
    await message.answer("<pre>                                                 ​⁠</pre>", reply_markup=get_keyboard_menu1(3), parse_mode=ParseMode.HTML)



buttonuuu = [[InlineKeyboardButton("next page", callback_data="plus_2")]]
markupPPPP = InlineKeyboardMarkup(buttonuuu)

@dp.message_handler(lambda message: message.text == "Menu9inGame")
async def send_game(message: types.Message):
    await bot.send_game(message.chat.id, game_short_name , reply_markup = get_keyboard_Game())
    print("send game")

@dp.callback_query_handler(lambda callback_query: callback_query.game_short_name == game_short_name)
async def game(call):
    await bot.answer_callback_query(call.id, url = "https://webbunny.netlify.app/")
    print("open game")

@dp.message_handler(lambda message: message.text == "$_Вернуться в главное меню")
async def without_puree(message: types.Message):
        await message.answer("Главное меню", reply_markup=keyboard)
        
        
        
        #await message.answer("Перезапуск бота:",reply_markup=key_res)

        # keyboard = types.InlineKeyboardMarkup()
        # callback_button = types.InlineKeyboardButton(text="Нажми меня", callback_data="test")
        # keyboard.add(callback_button)
        # bot.send_message(message.chat.id, "Я – сообщение из обычного режима", reply_markup=keyboard)

# @dp.inline_handler(lambda query: len(query.query) > 0)
# def query_text(query):
#     # kb = types.InlineKeyboardMarkup()
#     # # Добавляем колбэк-кнопку с содержимым "test"
#     # kb.add(types.InlineKeyboardButton(text="Нажми меня", callback_data="test"))
#     # results = []
#     # single_msg = types.InlineQueryResultArticle(
#     #     id="1", title="Press me",
#     #     input_message_content=types.InputTextMessageContent(message_text="Я – сообщение из инлайн-режима"),
#     #     reply_markup=kb
#     # )
#     # results.append(single_msg)
#     # bot.answer_inline_query(query.id, results)

@dp.message_handler(lambda message: message.text == "Перезапустить бота")
# async def send_alert_mess(call: types.CallbackQuery):
#     await call.answer(text="Спасибо, что воспользовались ботом!", show_alert=True)
    # await message.answer("Вас приветсвует тестовий телеграм бот \n Выберете необходимое меню:", reply_markup=keyboard)
    # await message.answer("Перезапуск бота:", reply_markup=key_res)
    # # или просто await call.answer()
async def send_start_mess(message: types.Message):
        await message.answer("Вас приветсвует тестовий телеграм бот \nВыберете необходимое меню:", reply_markup=keyboard)

if __name__ == "__main__":
    # Запуск бота
    executor.start_polling(dp, skip_updates=True)
# Запускаем бота
bot.polling(none_stop=True, interval=0)