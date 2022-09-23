
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


chatId = []

game_short_name = "hkjhgkgj_menu_bot"
# Объект бота
bot = Bot(token = config.BOT_TOKEN, parse_mode=types.ParseMode.HTML)
# Диспетчер для бота
dp = Dispatcher(bot)
# Включаем логирование, чтобы не пропустить важные сообщения
logging.basicConfig(level=logging.INFO)

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

@dp.message_handler(commands="start")
async def cmd_start(message: types.Message):
    await bot.send_game(message.chat.id, game_short_name , reply_markup = get_keyboard_Game())
    chatId.append(message.chat.id)
    


@dp.callback_query_handler(lambda callback_query: callback_query.game_short_name == game_short_name)
async def game(call):
    await bot.answer_callback_query(call.id, url = "https://webbunny.netlify.app/projects/tgbot/webbot/")
    print(chatId)

if __name__ == "__main__":
    # Запуск бота
    executor.start_polling(dp, skip_updates=True)
# Запускаем бота
bot.polling(none_stop=True, interval=0)
