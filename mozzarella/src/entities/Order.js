class Order {
  constructor({ id, userId, name, description, createdAt, price, finished }) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.price = price;
    this.finished = finished | false;
  }

  toJSON() {
    return {
      ...this,
      price: this.serializedPrice(),
    };
  }

  serializedPrice() {
    return `R$${(this.price / 100).toFixed(2).replace(".", ",")}`;
  }
}

module.exports = { Order };
